import { task } from "./task.model";

export interface proyect {
    id: number;
    name: string;
    description: string;
    url_image: string;
    start_date: Date;
    end_date: Date;
    created_at: Date;
    updated_at: Date;
    user_id: number;
    tasks: task[];
}

