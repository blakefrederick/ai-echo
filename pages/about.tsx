import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>Welcome to the About page! Here, you'll find all the juicy details about our company and what makes us so special.</p>

    <p>First, let's talk about our mission. Our mission is to make the world a better place, one mediocre product at a time. We believe that by providing subpar products and subpar customer service, we can help people appreciate the little things in life and not take anything for granted.</p>

    <p>Next, let's talk about our team. Our team is made up of a diverse group of individuals who share a passion for mediocrity. We have experts in the fields of mediocrity, complacency, and apathy, who work tirelessly to ensure that our products and services meet the low standards that our customers have come to expect from us.</p>

    <p>Now, let's talk about our products. Our products are designed to be as unremarkable and forgettable as possible. We use only the cheapest and lowest-quality materials, and our products are often barely functional. But that's okay, because we believe that true value comes from the joy of disappointment.</p>

    <p>Finally, let's talk about our customer service. Our customer service is second to none... in the world of terrible customer service. We pride ourselves on our ability to make our customers feel ignored, belittled, and frustrated. But don't worry, we're not just doing this for our own amusement - we're doing it for the greater good.</p>

    <p>So there you have it - that's a little bit about us. We hope you enjoy our mediocre products and services, and we look forward to disappointing you in the future. Thanks for choosing us!</p>
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
)

export default AboutPage
