// TODO: use the types generated by the API
// TODO: make this a pure ts file (as opposed to d.ts)
// TODO: move this out of admin

export interface Profile {
  email: string,
  groups: string[],
  issuedAt: number,
  expiresAt: number,
  sourceIp: string,
}

export interface Fundraiser {
  id: string,
  fundraiserName: string,
  activeFrom: number,
  activeTo: number,
  paused: boolean,
  goal: number,
  totalRaised: number,
  donationsCount: number,
  matchFundingRate: number,
  matchFundingPerDonationLimit: number | null,
  matchFundingRemaining: number | null,
  minimumDonationAmount: number | null,
  groupsWithAccess: string[],
  suggestedDonationAmountOneOff: number,
  suggestedDonationAmountWeekly: number,
  suggestedContributionAmount: number,
}

export interface Donation {
  id: string,
  fundraiserId: string,
  donorName: string,
  donorEmail: string,
  createdAt: number,
  addressLine1: string | null,
  addressLine2: string | null,
  addressLine3: string | null,
  addressPostcode: string | null,
  addressCountry: string | null,
  giftAid: boolean,
  comment: string | null,
  donationAmount: number,
  matchFundingAmount: number,
  contributionAmount: number,
  recurringAmount: number | null,
  recurrenceFrequency: ("WEEKLY" | "MONTHLY") | null,
  stripeId: string | null,
  charity: string,
  overallPublic: boolean,
  namePublic: boolean,
  donationAmountPublic: boolean,
}

export interface Payment {
  id: string,
  donationId: string,
  at: number,
  amount: number,
  method: "card" | "cash" | "direct_to_charity",
  reference: string | null,
  status: "paid" | "pending" | "cancelled",
}

export interface PublicFundraiser {
  activeFrom: number,
  activeTo: number | null,
  paused: boolean,
  goal: number,
  totalRaised: number,
  donationsCount: number,
  matchFundingRate: number,
  matchFundingPerDonationLimit: number | null,
  matchFundingRemaining: number | null,
  minimumDonationAmount: number | null,
  suggestedDonationAmountOneOff: number,
  suggestedDonationAmountWeekly: number,
  suggestedContributionAmount: number | null,
  donations: {
    donorName?: string,
    createdAt: number,
    giftAid?: boolean,
    comment: string | null,
    donationAmount?: number,
    matchFundingAmount?: number,
    recurringAmount?: number | null,
    recurrenceFrequency?: ("WEEKLY" | "MONTHLY") | null,
  }[],
}
