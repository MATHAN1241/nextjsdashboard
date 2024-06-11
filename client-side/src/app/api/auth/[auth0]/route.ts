import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

// export const GET = handleAuth();
export const GET = handleAuth({
    signin: handleLogin({
      returnTo: "/dashboard",
    }),
    signup: handleLogin({
      authorizationParams: {
        screen_hint: "signup",
      },
      returnTo: "/dashboard",
    }),
  });