/* eslint-disable react/prop-types */

import { ChallengeYouCard } from "./NotificationCards";

const NotiController = ({ control, seen }) => {
  switch (control) {
    case "challenge":
      return <ChallengeYouCard challenger="Sansei" seen={seen} />;

    default:
      null;
  }
};

export default NotiController;
