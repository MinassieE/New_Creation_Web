// src/pages/admin/Devotionals.tsx
import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../api/axios";
import { addDevotional } from "../../api/devotionals";

// Example type for Devotional
interface Devotional {
  _id: string;
  title_am: string;
  title_en?: string;
  devotional_note_am: string;
  devotional_note_en?: string;
  confession_am: string;
  confession_en?: string;
  verse_reference_am: string;
  verse_reference_en?: string;
  verse_text_am: string;
  verse_text_en?: string;
  is_published: boolean;
  publish_date?: string | null;
}

const fetchDevotionals = async (): Promise<Devotional[]> => {
  // backend may return { devotionals: [...] } or an array directly
  const res = await api.get("/devotional");
  return (res.data && (res.data.devotionals ?? res.data)) as Devotional[];
};

const Devotionals: React.FC = () => {
  const queryClient = useQueryClient();
  const { data: devotionals, isLoading } = useQuery<Devotional[], Error>({
    queryKey: ["devotionals"],
    queryFn: fetchDevotionals,
  });

  const [newDevotional, setNewDevotional] = useState<Partial<Devotional>>({
    title_am: "",
    devotional_note_am: "",
    confession_am: "",
    verse_reference_am: "",
    verse_text_am: "",
  });

  const addDevotionalMutation = useMutation<Devotional, Error, Partial<Devotional>>({
    mutationFn: async (payload) => {
      // use API helper which already uses the correct baseURL
      const { data } = await addDevotional(payload);
      // backend might return created devotional under `devotional` or directly
      return (data?.devotional ?? data) as Devotional;
    },
    onSuccess: () => {
  queryClient.invalidateQueries({ queryKey: ["devotionals"] });
      setNewDevotional({
        title_am: "",
        devotional_note_am: "",
        confession_am: "",
        verse_reference_am: "",
        verse_text_am: "",
      });
    },
  });

  const togglePublish = useMutation<any, Error, Devotional>({
    mutationFn: async (devotional) => {
      // adapt endpoint to the backend; using api wrapper
      const res = await api.put(`/devotional/${devotional._id}/publish`, {
        is_published: !devotional.is_published,
      });
      return res.data;
    },
    onSuccess: () => {
  queryClient.invalidateQueries({ queryKey: ["devotionals"] });
    },
  });

  const handleAddDevotional = (e: React.FormEvent) => {
    e.preventDefault();
    addDevotionalMutation.mutate({ ...newDevotional });
  };

  if (isLoading) return <div>Loading...</div>;

  const list = devotionals ?? [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Devotionals</h1>

      {/* Add new devotional form */}
      <form
        className="bg-white p-4 rounded shadow mb-6 space-y-3"
        onSubmit={handleAddDevotional}
      >
        <h2 className="font-semibold text-lg">Add New Devotional</h2>
        <input
          type="text"
          placeholder="Title (Amharic)"
          className="w-full border p-2 rounded"
          value={newDevotional.title_am}
          onChange={(e) =>
            setNewDevotional({ ...newDevotional, title_am: e.target.value })
          }
          required
        />
        <textarea
          placeholder="Devotional Note (Amharic)"
          className="w-full border p-2 rounded"
          value={newDevotional.devotional_note_am}
          onChange={(e) =>
            setNewDevotional({ ...newDevotional, devotional_note_am: e.target.value })
          }
          required
        />
        <textarea
          placeholder="Confession (Amharic)"
          className="w-full border p-2 rounded"
          value={newDevotional.confession_am}
          onChange={(e) =>
            setNewDevotional({ ...newDevotional, confession_am: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Verse Reference (Amharic)"
          className="w-full border p-2 rounded"
          value={newDevotional.verse_reference_am}
          onChange={(e) =>
            setNewDevotional({ ...newDevotional, verse_reference_am: e.target.value })
          }
          required
        />
        <textarea
          placeholder="Verse Text (Amharic)"
          className="w-full border p-2 rounded"
          value={newDevotional.verse_text_am}
          onChange={(e) =>
            setNewDevotional({ ...newDevotional, verse_text_am: e.target.value })
          }
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Devotional
        </button>
      </form>

      {/* List devotionals */}
      <div className="space-y-4">
  {list.map((d) => (
          <div
            key={d._id}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">{d.title_am}</h3>
              <p className="text-sm text-gray-600">
                Published: {d.is_published ? "Yes" : "No"}{" "}
                {d.publish_date ? `(on ${new Date(d.publish_date).toLocaleDateString()})` : ""}
              </p>
            </div>
            <button
              onClick={() => togglePublish.mutate(d)}
              className={`px-3 py-1 rounded ${
                d.is_published ? "bg-red-500 text-white" : "bg-green-500 text-white"
              }`}
            >
              {d.is_published ? "Unpublish" : "Publish"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Devotionals;
