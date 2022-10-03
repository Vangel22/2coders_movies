import { Movie } from "./movie";

export type MovieOrganizer = {
    page: number;
    results: [Movie];
    total_pages: number;
    total_results: number;
}