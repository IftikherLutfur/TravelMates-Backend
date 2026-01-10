import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../prisma/generated/prisma";
declare const prisma: PrismaClient<{
    adapter: PrismaPg;
}, never, import("../../prisma/generated/prisma/runtime/client").DefaultArgs>;
export { prisma };
//# sourceMappingURL=prisma.d.ts.map