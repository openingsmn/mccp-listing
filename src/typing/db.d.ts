import { Address, Listing, Mobility, TeamContact } from "@prisma/client";

type ITeamContact = TeamContact & {
  assessmentFiles?: AssessmentFile[];
  listing?: IListing[];
};

type IAddress = Address & {
  listing?: IListing[];
};
type IMobility = Mobility & {
  listing?: IListing[];
};

type IListing = Listing & {
  address?: IAddress;
  mobility?: IMobility;
  teamContact?: ITeamContact;
};
