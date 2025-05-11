import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <h2>Deployed in AWS</h2>
      <h3>Hello World! Deployed by CI/CD</h3>
      <h5>CI/CD is working when merged to main branch</h5>
    </div>
  );
}
