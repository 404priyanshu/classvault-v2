export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          user_id: string;
          display_name: string;
          study_stage: string;
          university_name: string;
          college_email: string | null;
          subjects: string[];
          primary_goal: string;
          study_approach: string;
          onboarding_completed_at: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          display_name: string;
          study_stage: string;
          university_name: string;
          college_email?: string | null;
          subjects: string[];
          primary_goal: string;
          study_approach: string;
          onboarding_completed_at?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          user_id?: string;
          display_name?: string;
          study_stage?: string;
          university_name?: string;
          college_email?: string | null;
          subjects?: string[];
          primary_goal?: string;
          study_approach?: string;
          onboarding_completed_at?: string;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "profiles_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

export type ProfileRow = Database["public"]["Tables"]["profiles"]["Row"];
export type ProfileInsert = Database["public"]["Tables"]["profiles"]["Insert"];
