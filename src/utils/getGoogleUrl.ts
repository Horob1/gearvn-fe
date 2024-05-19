const getGoogleAuthUrl = () => {
  const rootUrl = "https://accounts.google.com/o/oauth2/auth"

  const options = {
    client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID as string,
    redirect_uri: import.meta.env.VITE_GOOGLE_AUTH_REDIRECT_URL as string,
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope: "https://www.googleapis.com/auth/userinfo.email"
  };

  const qs = new URLSearchParams(options);

  return `${rootUrl}?${qs.toString()}` ;
}

export default getGoogleAuthUrl