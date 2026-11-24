"use client";

import { create } from "zustand";

export type Lesson = {
  _id: string;
  name: string;
  description: string;
  module: string;
};

export type CourseModule = {
  _id: string;
  name: string;
  description?: string;
  course: string;
  lessons?: Lesson[];
  editing?: boolean;
};

// Client-side cache of the modules Express returns. The server is the source
// of truth, so the cache starts empty and the Modules screen fills it.
type ModulesStore = {
  modules: CourseModule[];
  setModules: (modules: CourseModule[]) => void;
  addModule: (module: CourseModule) => void;
  deleteModule: (moduleId: string) => void;
  updateModule: (module: CourseModule) => void;
  editModule: (moduleId: string) => void;
};

export const useModulesStore = create<ModulesStore>((set) => ({
  modules: [],
  setModules: (modules) => set({ modules }),
  addModule: (module) =>
    set((state) => ({
      modules: [...state.modules, module],
    })),
  deleteModule: (moduleId) =>
    set((state) => ({
      modules: state.modules.filter((m) => m._id !== moduleId),
    })),
  updateModule: (module) =>
    set((state) => ({
      modules: state.modules.map((m) => (m._id === module._id ? module : m)),
    })),
  editModule: (moduleId) =>
    set((state) => ({
      modules: state.modules.map((m) =>
        m._id === moduleId ? { ...m, editing: true } : m,
      ),
    })),
}));
