export declare const authService: {
    login: (payload: {
        email: string;
        password: string;
    }) => Promise<{
        accessToken: string;
        refreshToken: string;
        data: {
            id: string;
            email: string;
            name: string;
            role: import("../../../../prisma/generated/prisma").$Enums.Role;
            password: string;
            bio: string | null;
            isPremium: boolean;
            travelInterest: string[];
            visitedCountries: string[];
            userStatus: import("../../../../prisma/generated/prisma").$Enums.Userstatus;
            currentLocation: string | null;
            profileImage: string | null;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map