import NextAuth from 'next-auth';
import KeycloakProvider from 'next-auth/providers/keycloak';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    KeycloakProvider({
      clientId: 'wpk8s-ui-client',
      clientSecret: '07bgr0DHOmd526E7tJ49SiLMEAsZrPy4',
      issuer: 'https://iam.padmini.systems/realms/wpk8s-ui'
    })
    // ...add more providers here
  ]
};

export default NextAuth(authOptions);
