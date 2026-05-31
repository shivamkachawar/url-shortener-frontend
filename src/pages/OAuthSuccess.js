import { useEffect } from "react";

function OAuthSuccess() {

  useEffect(() => {

    const token =
      new URLSearchParams(
        window.location.search
      ).get("token");

    if (token) {

      localStorage.setItem(
        "token",
        token
      );

      window.location.href = "/";
    }

  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      Logging you in...
    </div>
  );
}

export default OAuthSuccess;