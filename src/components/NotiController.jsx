/* eslint-disable react/prop-types */

import {
  ChallengeYouCard,
  InviteSquadCard,
  RedeemCard,
  YouChallengeCard,
} from "./NotificationCards";

const NotiController = ({
  control,
  seen,
  challenger = "",
  accepter,
  denier,
  inviter,
  squad,
}) => {
  switch (control) {
    case "challenge":
      return <ChallengeYouCard challenger={challenger} seen={seen} />;

    case "victory":
      return <RedeemCard seen={seen} />;

    case "accept":
      return <YouChallengeCard accepter={accepter} seen={seen} />;

    case "deny":
      return <YouChallengeCard denier={denier} seen={seen} />;

    case "invite":
      return <InviteSquadCard inviter={inviter} squad={squad} />;
    default:
      null;
  }
};

export default NotiController;
