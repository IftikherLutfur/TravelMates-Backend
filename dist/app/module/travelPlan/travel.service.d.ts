export declare const travelService: {
    travelCreate: (payload: any, userEmail: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        destination: string;
        description: string;
        startDate: Date;
        endDate: Date;
        budgetRange: number;
        travelType: import("../../../../prisma/generated/prisma").$Enums.TravelType;
        userEmail: string;
    }>;
    getAllTravel: () => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        destination: string;
        description: string;
        startDate: Date;
        endDate: Date;
        budgetRange: number;
        travelType: import("../../../../prisma/generated/prisma").$Enums.TravelType;
        userEmail: string;
    }[]>;
    getIndividualTravel: (email: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        destination: string;
        description: string;
        startDate: Date;
        endDate: Date;
        budgetRange: number;
        travelType: import("../../../../prisma/generated/prisma").$Enums.TravelType;
        userEmail: string;
    }[]>;
    singleTravel: (id: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        destination: string;
        description: string;
        startDate: Date;
        endDate: Date;
        budgetRange: number;
        travelType: import("../../../../prisma/generated/prisma").$Enums.TravelType;
        userEmail: string;
    } | null>;
    travelDelete: (email: string, id: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        destination: string;
        description: string;
        startDate: Date;
        endDate: Date;
        budgetRange: number;
        travelType: import("../../../../prisma/generated/prisma").$Enums.TravelType;
        userEmail: string;
    }>;
};
//# sourceMappingURL=travel.service.d.ts.map