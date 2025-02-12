export interface IManagerDetails {
    name: string;
    contact: string;
    email: string;
    role: string;
    permissions: {
      createProfiles: boolean;
      accessRequestedClasses: boolean;
      rejectIncomingClassRequests: boolean;
      deleteClasses: boolean;
      editAndDeleteRequests: boolean;
    };
}