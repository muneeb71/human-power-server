export interface IManagerDetails {
    login_role: string;
    name: string;
    contact: string;
    password: string;
    email: string;
    photo: string;
    role: string;
    // allowed_permissions: number;
    // permissions: {
    //   createProfiles: boolean;
    //   accessRequestedClasses: boolean;
    //   rejectIncomingClassRequests: boolean;
    //   deleteClasses: boolean;
    //   editAndDeleteRequests: boolean;
    // };
    createdAt: Date;
    updatedAt: Date;
}