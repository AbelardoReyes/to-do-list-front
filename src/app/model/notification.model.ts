export interface notification {
    id: number;
    type: string; // e.g., 'info', 'warning', 'error'
    message: string;
    read: boolean;
    created_at: Date;
    updated_at: Date;
}