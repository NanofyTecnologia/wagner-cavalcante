import { NextAuthOptions } from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials'

import { api } from '../axios'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'E-mail', type: 'text', placeholder: 'E-mail' },
        password: { label: 'Senha', type: 'password' },
      },
      async authorize(credentials) {
        const response = await api.post('/auth/sign-in', credentials)

        if (response.status === 200) {
          return response.data
        }

        return 'Credenciais inválidas'
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub

      return session
    },
  },
}
