interface Env {
  // Add bindings here if needed (e.g., KV, D1, Email)
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const formData = await context.request.formData();

    const name = formData.get('name')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const phone = formData.get('phone')?.toString() || '';
    const model = formData.get('model')?.toString() || '';
    const message = formData.get('message')?.toString() || '';
    const locale = formData.get('locale')?.toString() || 'nl';
    const honeypot = formData.get('website')?.toString() || '';

    // Spam check
    if (honeypot) {
      return new Response(JSON.stringify({ success: true }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Validation
    if (!name || !email) {
      return new Response(
        JSON.stringify({ success: false, error: 'Name and email are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid email address' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // TODO: Send email via Resend, SendGrid, or Cloudflare Email Workers
    // For now, log the submission
    console.log('Quote request:', { name, email, phone, model, message, locale });

    // Redirect back with success
    const redirectUrl = locale === 'fr' ? '/fr/contact?success=true' : '/nl/contact?success=true';

    return Response.redirect(new URL(redirectUrl, context.request.url).toString(), 303);
  } catch (error) {
    console.error('Form submission error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
