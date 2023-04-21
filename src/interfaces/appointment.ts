export interface Appointment {
    id: number,
    title: string;
    start:Date;
    end: Date;
    description?: string;
}