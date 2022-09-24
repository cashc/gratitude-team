export interface User {
  name: string;
  spiritname: string;
  email: string;
  id: number;
}
export interface UserLD extends User {}

export interface Tag {
  name: string;
  id: number;
  parentTagId?: number;
}
export interface TagLD extends Tag {
  parentTag?: Tag;
}

export interface Event {
  name: string;
  description: string;
  id: number;
  tag_ids?: number[];
  start_time: number;
  duration_mins: number;
  created_by_id: number;
  facilitated_by_id: number;
  invited_ids: number[];
  hidden: boolean;
  access_ids: number[];
}
export interface EventLD extends Event {
  tags?: Tag[];
  access?: Access[];
  created_by?: User;
  facilitated_by?: User;
  invited?: User[];
}

export interface Access {
  name: string;
  id: number;
  parentAccessId?: number;
  user_ids: number[];
  creator_id: number;
}
export interface AccessLD extends Access {
  parentAccess?: Access;
}
