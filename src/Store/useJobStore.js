// src/store/jobStore.js
import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

export const useJobStore = create((set, get) => ({
  jobs: [],

  addJob: (jobData) =>
    set((state) => ({
      jobs: [...state.jobs, { ...jobData, uuid: uuidv4() }],
    })),

  deleteJob: (uuid) =>
    set((state) => ({
      jobs: state.jobs.filter((job) => job.uuid !== uuid),
    })),

  updateJob: (uuid, updatedData) =>
    set((state) => ({
      jobs: state.jobs.map((job) =>
        job.uuid === uuid ? { ...job, ...updatedData } : job
      ),
    })),

  getJobById: (uuid) => {
    const state = get();
    return state.jobs.find((job) => job.uuid === uuid);
  },
}));
