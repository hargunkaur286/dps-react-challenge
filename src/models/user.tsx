// creating a model with necessary fields required for the task i.e. that of "id", "firstName", "lastName", "city name" and "birthDate"

export interface user {
    id: number;
    firstName: string;
    lastName: string;
    address: {
        city: string;
    };
    birthDate: string;
}