import mongoose, { Mongoose } from "mongoose";

class DatabaseService {
    readonly DATABASE_URI = process.env.DATABASE_URI || "mongodb://127.0.0.1:27017/gallery";
    private static instance: DatabaseService;
    private db?: Mongoose;

    public static getInstance(): DatabaseService {
        if (this.instance) return this.instance;
        this.instance = new DatabaseService();
        return this.instance;
    }

    async connect() {
        if (this.db) return this.db;
        this.db = await mongoose.connect(this.DATABASE_URI);
        return this.db;
    }

    async disconnect() {
        if (!this.db) return;
        await this.db.disconnect();
        this.db = undefined;
    }
}

export default DatabaseService.getInstance();
