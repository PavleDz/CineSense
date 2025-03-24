import { useEffect } from "react";

export default function FacebookPage() {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    script.src =
      "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0";
    script.onload = () => {
      window.FB && window.FB.XFBML.parse();
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="fb-page"
      data-href="https://www.facebook.com/coinisltd/"
      data-width="380"
      data-hide-cover="false"
      data-show-facepile="false"
    ></div>
  );
}
