import NextAuth from 'next-auth';
import KeycloakProvider from 'next-auth/providers/keycloak';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_ID,
      clientSecret: process.env.NEXTAUTH_SECRET,
      issuer: process.env.KEYCLOAK_ISSUER
    })
    // ...add more providers here
  ]
};

export default NextAuth(authOptions);
