export interface Todo {
  id: number;
  name: string;
  description?: string | null;
  expires_in?: Date | null;
}
