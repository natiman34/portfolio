export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      activities: {
        Row: {
          created_at: string | null
          date: string
          details: Json | null
          id: string
          type: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          date: string
          details?: Json | null
          id?: string
          type?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          date?: string
          details?: Json | null
          id?: string
          type?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      activity_log: {
        Row: {
          admin_id: string | null
          created_at: string | null
          description: string
          id: string
          timestamp: string | null
          title: string
          type: string
          user_id: string | null
        }
        Insert: {
          admin_id?: string | null
          created_at?: string | null
          description: string
          id?: string
          timestamp?: string | null
          title: string
          type: string
          user_id?: string | null
        }
        Update: {
          admin_id?: string | null
          created_at?: string | null
          description?: string
          id?: string
          timestamp?: string | null
          title?: string
          type?: string
          user_id?: string | null
        }
        Relationships: []
      }
      admin_logs: {
        Row: {
          action: string
          admin_id: string
          created_at: string | null
          details: Json | null
          id: string
        }
        Insert: {
          action: string
          admin_id: string
          created_at?: string | null
          details?: Json | null
          id?: string
        }
        Update: {
          action?: string
          admin_id?: string
          created_at?: string | null
          details?: Json | null
          id?: string
        }
        Relationships: []
      }
      exercises: {
        Row: {
          created_at: string | null
          description: string | null
          difficulty_level: string | null
          equipment: string[] | null
          exercise_type: string | null
          id: string
          image_url: string | null
          instructions: string[] | null
          is_ethiopian_traditional: boolean | null
          muscle_groups: string[]
          name: string
          updated_at: string | null
          video_url: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          difficulty_level?: string | null
          equipment?: string[] | null
          exercise_type?: string | null
          id?: string
          image_url?: string | null
          instructions?: string[] | null
          is_ethiopian_traditional?: boolean | null
          muscle_groups: string[]
          name: string
          updated_at?: string | null
          video_url?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          difficulty_level?: string | null
          equipment?: string[] | null
          exercise_type?: string | null
          id?: string
          image_url?: string | null
          instructions?: string[] | null
          is_ethiopian_traditional?: boolean | null
          muscle_groups?: string[]
          name?: string
          updated_at?: string | null
          video_url?: string | null
        }
        Relationships: []
      }
      feedback: {
        Row: {
          content: string
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string
          is_resolved: boolean | null
          rating: number | null
          reply_message: string | null
          resolved_at: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          is_resolved?: boolean | null
          rating?: number | null
          reply_message?: string | null
          resolved_at?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          is_resolved?: boolean | null
          rating?: number | null
          reply_message?: string | null
          resolved_at?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      fitness_plans: {
        Row: {
          average_workout_time: number | null
          category: string | null
          completion_rate: number | null
          created_at: string | null
          description: string | null
          difficulty: number | null
          difficulty_level: string | null
          duration: string
          equipment: string[] | null
          equipment_required: string[] | null
          estimated_calories_burn: number | null
          exercise_list: Json
          featured: boolean | null
          full_gif_url: string | null
          full_url: string | null
          goals: string[] | null
          id: string
          image_url: string | null
          intensity: string | null
          level: string | null
          location: string | null
          muscle_groups: string[] | null
          name: string
          plan_type: string
          planner_id: string | null
          prerequisites: string[] | null
          rating: number | null
          review_count: number | null
          schedule: Json | null
          status: string | null
          tags: string[] | null
          target_audience: string | null
          thumbnail_gif_url: string | null
          time_of_day: string | null
          title: string | null
          updated_at: string | null
          user_id: string | null
          weekly_workouts: number | null
        }
        Insert: {
          average_workout_time?: number | null
          category?: string | null
          completion_rate?: number | null
          created_at?: string | null
          description?: string | null
          difficulty?: number | null
          difficulty_level?: string | null
          duration: string
          equipment?: string[] | null
          equipment_required?: string[] | null
          estimated_calories_burn?: number | null
          exercise_list: Json
          featured?: boolean | null
          full_gif_url?: string | null
          full_url?: string | null
          goals?: string[] | null
          id?: string
          image_url?: string | null
          intensity?: string | null
          level?: string | null
          location?: string | null
          muscle_groups?: string[] | null
          name: string
          plan_type: string
          planner_id?: string | null
          prerequisites?: string[] | null
          rating?: number | null
          review_count?: number | null
          schedule?: Json | null
          status?: string | null
          tags?: string[] | null
          target_audience?: string | null
          thumbnail_gif_url?: string | null
          time_of_day?: string | null
          title?: string | null
          updated_at?: string | null
          user_id?: string | null
          weekly_workouts?: number | null
        }
        Update: {
          average_workout_time?: number | null
          category?: string | null
          completion_rate?: number | null
          created_at?: string | null
          description?: string | null
          difficulty?: number | null
          difficulty_level?: string | null
          duration?: string
          equipment?: string[] | null
          equipment_required?: string[] | null
          estimated_calories_burn?: number | null
          exercise_list?: Json
          featured?: boolean | null
          full_gif_url?: string | null
          full_url?: string | null
          goals?: string[] | null
          id?: string
          image_url?: string | null
          intensity?: string | null
          level?: string | null
          location?: string | null
          muscle_groups?: string[] | null
          name?: string
          plan_type?: string
          planner_id?: string | null
          prerequisites?: string[] | null
          rating?: number | null
          review_count?: number | null
          schedule?: Json | null
          status?: string | null
          tags?: string[] | null
          target_audience?: string | null
          thumbnail_gif_url?: string | null
          time_of_day?: string | null
          title?: string | null
          updated_at?: string | null
          user_id?: string | null
          weekly_workouts?: number | null
        }
        Relationships: []
      }
      meals: {
        Row: {
          category: string | null
          cook_time: number | null
          created_at: string | null
          created_by: string | null
          cuisine_type: string | null
          description: string | null
          difficulty_level: string | null
          id: string
          image_url: string | null
          ingredients: Json | null
          is_ethiopian: boolean | null
          name: string
          nutritional_info: Json | null
          prep_time: number | null
          preparation: string | null
          servings: number | null
          status: string | null
          tags: Json | null
          updated_at: string | null
        }
        Insert: {
          category?: string | null
          cook_time?: number | null
          created_at?: string | null
          created_by?: string | null
          cuisine_type?: string | null
          description?: string | null
          difficulty_level?: string | null
          id?: string
          image_url?: string | null
          ingredients?: Json | null
          is_ethiopian?: boolean | null
          name: string
          nutritional_info?: Json | null
          prep_time?: number | null
          preparation?: string | null
          servings?: number | null
          status?: string | null
          tags?: Json | null
          updated_at?: string | null
        }
        Update: {
          category?: string | null
          cook_time?: number | null
          created_at?: string | null
          created_by?: string | null
          cuisine_type?: string | null
          description?: string | null
          difficulty_level?: string | null
          id?: string
          image_url?: string | null
          ingredients?: Json | null
          is_ethiopian?: boolean | null
          name?: string
          nutritional_info?: Json | null
          prep_time?: number | null
          preparation?: string | null
          servings?: number | null
          status?: string | null
          tags?: Json | null
          updated_at?: string | null
        }
        Relationships: []
      }
      nutrition_plans: {
        Row: {
          calories: number | null
          created_at: string | null
          description: string | null
          diet_type: string
          duration: string
          id: string
          meal_plan: Json
          name: string
          nutritionist_id: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          calories?: number | null
          created_at?: string | null
          description?: string | null
          diet_type: string
          duration: string
          id?: string
          meal_plan: Json
          name: string
          nutritionist_id?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          calories?: number | null
          created_at?: string | null
          description?: string | null
          diet_type?: string
          duration?: string
          id?: string
          meal_plan?: Json
          name?: string
          nutritionist_id?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      progress_tracking: {
        Row: {
          height: number | null
          id: string
          measurements: Json | null
          notes: string | null
          progress_photos: string[] | null
          recorded_date: string | null
          user_id: string | null
          weight: number | null
        }
        Insert: {
          height?: number | null
          id?: string
          measurements?: Json | null
          notes?: string | null
          progress_photos?: string[] | null
          recorded_date?: string | null
          user_id?: string | null
          weight?: number | null
        }
        Update: {
          height?: number | null
          id?: string
          measurements?: Json | null
          notes?: string | null
          progress_photos?: string[] | null
          recorded_date?: string | null
          user_id?: string | null
          weight?: number | null
        }
        Relationships: []
      }
      routine_days: {
        Row: {
          created_at: string | null
          day_name: string | null
          day_number: number
          estimated_duration_minutes: number | null
          focus_muscle_groups: string[] | null
          id: string
          rest_day: boolean | null
          routine_id: string | null
        }
        Insert: {
          created_at?: string | null
          day_name?: string | null
          day_number: number
          estimated_duration_minutes?: number | null
          focus_muscle_groups?: string[] | null
          id?: string
          rest_day?: boolean | null
          routine_id?: string | null
        }
        Update: {
          created_at?: string | null
          day_name?: string | null
          day_number?: number
          estimated_duration_minutes?: number | null
          focus_muscle_groups?: string[] | null
          id?: string
          rest_day?: boolean | null
          routine_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "routine_days_routine_id_fkey"
            columns: ["routine_id"]
            isOneToOne: false
            referencedRelation: "user_routines"
            referencedColumns: ["id"]
          },
        ]
      }
      routine_exercises: {
        Row: {
          created_at: string | null
          exercise_id: string | null
          id: string
          is_superset: boolean | null
          notes: string | null
          order_index: number
          reps: string | null
          rest_seconds: number | null
          routine_day_id: string | null
          sets: number | null
          superset_group: number | null
          weight_kg: number | null
        }
        Insert: {
          created_at?: string | null
          exercise_id?: string | null
          id?: string
          is_superset?: boolean | null
          notes?: string | null
          order_index: number
          reps?: string | null
          rest_seconds?: number | null
          routine_day_id?: string | null
          sets?: number | null
          superset_group?: number | null
          weight_kg?: number | null
        }
        Update: {
          created_at?: string | null
          exercise_id?: string | null
          id?: string
          is_superset?: boolean | null
          notes?: string | null
          order_index?: number
          reps?: string | null
          rest_seconds?: number | null
          routine_day_id?: string | null
          sets?: number | null
          superset_group?: number | null
          weight_kg?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "routine_exercises_exercise_id_fkey"
            columns: ["exercise_id"]
            isOneToOne: false
            referencedRelation: "exercises"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "routine_exercises_routine_day_id_fkey"
            columns: ["routine_day_id"]
            isOneToOne: false
            referencedRelation: "routine_days"
            referencedColumns: ["id"]
          },
        ]
      }
      user_activity_progress: {
        Row: {
          created_at: string | null
          id: string
          selected_dates: string[]
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          selected_dates?: string[]
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          selected_dates?: string[]
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_profiles: {
        Row: {
          bmi: number | null
          created_at: string | null
          email: string
          fitness_goal: string | null
          full_name: string | null
          height: number | null
          id: string
          role: string | null
          updated_at: string | null
          user_id: string | null
          weight: number | null
        }
        Insert: {
          bmi?: number | null
          created_at?: string | null
          email: string
          fitness_goal?: string | null
          full_name?: string | null
          height?: number | null
          id: string
          role?: string | null
          updated_at?: string | null
          user_id?: string | null
          weight?: number | null
        }
        Update: {
          bmi?: number | null
          created_at?: string | null
          email?: string
          fitness_goal?: string | null
          full_name?: string | null
          height?: number | null
          id?: string
          role?: string | null
          updated_at?: string | null
          user_id?: string | null
          weight?: number | null
        }
        Relationships: []
      }
      user_routines: {
        Row: {
          created_at: string | null
          days_per_week: number | null
          description: string | null
          difficulty_level: string | null
          duration_weeks: number | null
          estimated_duration_minutes: number | null
          id: string
          is_public: boolean | null
          is_template: boolean | null
          name: string
          tags: string[] | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          days_per_week?: number | null
          description?: string | null
          difficulty_level?: string | null
          duration_weeks?: number | null
          estimated_duration_minutes?: number | null
          id?: string
          is_public?: boolean | null
          is_template?: boolean | null
          name: string
          tags?: string[] | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          days_per_week?: number | null
          description?: string | null
          difficulty_level?: string | null
          duration_weeks?: number | null
          estimated_duration_minutes?: number | null
          id?: string
          is_public?: boolean | null
          is_template?: boolean | null
          name?: string
          tags?: string[] | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      check_user_exists_by_email: {
        Args: { user_email: string }
        Returns: boolean
      }
      create_user_profile: {
        Args: {
          user_id: string
          user_full_name: string
          user_email: string
          user_role?: string
        }
        Returns: boolean
      }
      email_exists: {
        Args: { email_to_check: string }
        Returns: boolean
      }
      get_dashboard_stats: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      get_growth_data: {
        Args: { months: number }
        Returns: Json
      }
      is_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
