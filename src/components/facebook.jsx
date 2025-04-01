import useFacebook from "../hooks/useFacebook";

export default function FacebookPage() {
  useFacebook();

  return (
    <div
      className="fb-page"
      data-href="https://www.facebook.com/coinisl/"
      data-width="380"
      data-hide-cover="false"
      data-show-facepile="false"
    ></div>
  );
}
