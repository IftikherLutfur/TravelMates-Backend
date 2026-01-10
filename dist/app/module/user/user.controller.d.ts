import { Request, Response } from "express";
export declare const userCOntroller: {
    userCreation: (req: Request, res: Response) => Promise<void>;
    getOwnUser: (req: Request, res: Response) => Promise<void>;
    userFindByEmail: (req: Request, res: Response) => Promise<void>;
    editUser: (req: Request, res: Response) => Promise<void>;
    getAllUser: (req: Request, res: Response) => Promise<void>;
    activeToDeactive: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=user.controller.d.ts.map