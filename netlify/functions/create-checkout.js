import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async (req) => {
  const { priceId, quantity } = await req.json()

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: quantity || 1,
      },
    ],
    mode: 'payment',
    success_url: 'https://melodious-lamington-8f2b55.netlify.app/success.html',
    cancel_url: 'https://melodious-lamington-8f2b55.netlify.app/product.html',
    shipping_address_collection: {
      allowed_countries: ['AU'],
    },
  })

  return Response.json({ url: session.url })
}

export const config = {
  path: '/api/create-checkout'
}
