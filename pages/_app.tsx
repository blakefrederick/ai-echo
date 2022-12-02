import './BreakfastGenerator.css'; // Import the CSS styles

// TypeScript interface for the page component
interface PageComponentProps {
  Component: React.ComponentType;
  pageProps: Record<string, any>;
}

function MyApp({ Component, pageProps }: PageComponentProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
