export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Task {
  id: string;
  user_id?: string;
  name: string;
  description: string;
  image_path?: string;
}

export interface Database {
  public: {
    Tables: {
      tasks: {
        Row: {
          created_at: string | null;
          description: string | null;
          id: number;
          name: string | null;
        };
        Insert: {
          created_at?: string | null;
          description?: string | null;
          id?: number;
          name?: string | null;
        };
        Update: {
          created_at?: string | null;
          description?: string | null;
          id?: number;
          name?: string | null;
        };
        Relationships: [];
      };
      user_current_task: {
        Row: {
          created_at: string | null;
          id: number;
          task_id: number | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          task_id?: number | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          task_id?: number | null;
          user_id?: string | null;
        };
        Relationships: [];
      };
      users: {
        Row: {
          avatar_url: string | null;
          full_name: string | null;
          id: string;
          updated_at: string | null;
          username: string | null;
          website: string | null;
        };
        Insert: {
          avatar_url?: string | null;
          full_name?: string | null;
          id: string;
          updated_at?: string | null;
          username?: string | null;
          website?: string | null;
        };
        Update: {
          avatar_url?: string | null;
          full_name?: string | null;
          id?: string;
          updated_at?: string | null;
          username?: string | null;
          website?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "users_id_fkey";
            columns: ["id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
