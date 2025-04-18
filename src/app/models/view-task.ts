export interface ViewTask {
    id: string;
    userId: string;
    title: string;
    description: string;
    startAt: Date;
    endAt: Date;
    priority: "LOW" | "MEDIUM" | "HIGH";
}
