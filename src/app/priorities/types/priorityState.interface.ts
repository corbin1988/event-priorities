import { PriorityInterface } from "./priority.interface";

export interface PrioritiesState {
  priorities: PriorityInterface[];
  isModalOpen: boolean;
  name: string;
  slide: number;
  tab: string;
  avatar?: string;
  role?: string;
  created_at?: string;
  age?: number | null;
  status?: string;
  isLoading: boolean;
  error: string | null;
}