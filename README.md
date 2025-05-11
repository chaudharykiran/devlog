# Welcome to Remix + Vite on Lambda!

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/guides/vite) for details on supported features.

## Development

Run the Vite dev server:

```shellscript
yarn dev
```

## Deployment

First, build your app for production:

```sh
yarn build
```

Then run the app in production mode:

```sh
yarn start
```

### Deploy

Install the [Pulumi CLI](https://www.pulumi.com/docs/get-started/install/)

Install the infrastructure dependencies and configure your AWS credentials:
```sh
cd infrastructure
yarn
pulumi config set aws:region <your-region>
pulumi config set aws:accessKey <your-access-key>
pulumi config set aws:secretKey <your-secret-key> --secret
cd ..
```

Deploy the infrastructure:
```sh
yarn deploy
```

Build the application and deploy it to the infrastructure:
```sh
yarn build:deploy
```

This starter repo is completely within the AWS free tier, so no need to worry about any costs.
