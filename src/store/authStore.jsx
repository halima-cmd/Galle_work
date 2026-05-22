import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  user:  JSON.parse(localStorage.getItem('user'))  || null,
  token: localStorage.getItem('token') || null,
  role:  localStorage.getItem('role')  || null,

  login: (user, token, role) => {
    localStorage.setItem('token', token)
    localStorage.setItem('role',  role)
    localStorage.setItem('user',  JSON.stringify(user))
    set({ user, token, role })
  },

  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem('user')
    set({ user: null, token: null, role: null })
  },
}))