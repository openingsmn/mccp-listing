import {
  Address,
  ListingSubmission,
  Mobility,
  TeamContact,
} from "@prisma/client";

type ITeamContact = TeamContact & {
  assessmentFiles?: AssessmentFile[];
  listing?: IListingSubmission[];
};

type IAddress = Address & {
  listing?: IListingSubmission[];
};
type IMobility = Mobility & {
  listing?: IListingSubmission[];
};

type IListingSubmission = ListingSubmission & {
  address?: IAddress;
  mobility?: IMobility;
  teamContact?: ITeamContact;
};
