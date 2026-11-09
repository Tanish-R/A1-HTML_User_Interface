"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";

export default function Profile() {
  const [profile, setProfile] = useState<User | null>(null);
  const { currentUser, setCurrentUser } = useAccountContext();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/account/signin");
      return;
    }
    setProfile(currentUser);
  }, [currentUser, router]);

  const signout = () => {
    setCurrentUser(null);
    router.push("/account/signin");
  };

  if (!profile) return null;
  return (
    <div id="wd-profile-screen" className="max-w-sm">
      <h3 className="mb-3 text-2xl font-semibold">Profile</h3>
      <input
        id="wd-username"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
        value={profile.username}
        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
      />
      <br />
      <input
        id="wd-password"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
        type="password"
        placeholder="password"
        value={profile.password}
        onChange={(e) => setProfile({ ...profile, password: e.target.value })}
      />
      <br />
      <input
        id="wd-firstname"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
        placeholder="First Name"
        value={profile.firstName}
        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
      />
      <br />
      <input
        id="wd-lastname"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
        placeholder="Last Name"
        value={profile.lastName}
        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
      />
      <br />
      <input
        id="wd-email"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
        type="email"
        placeholder="email"
        value={profile.email}
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
      />
      <br />
      <select
        id="wd-role"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
        value={profile.role}
        onChange={(e) => setProfile({ ...profile, role: e.target.value })}
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="TA">TA</option>
        <option value="STUDENT">Student</option>
      </select>
      <br />
      <button
        type="button"
        onClick={signout}
        id="wd-signout-btn"
        className="mb-2 block w-full rounded bg-red-600 px-3 py-2 text-center text-white"
      >
        Sign out
      </button>
    </div>
  );
}