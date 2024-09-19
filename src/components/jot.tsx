import { formatRelative, formatDistance, differenceInHours } from "date-fns";
import { useSession } from "next-auth/react";
import Image from "next/image";

export type Jot = {
  id: string;
  username: string;
  avatar?: string;
  body: string;
  createdAt: string;
};

interface Props {
  jot: Jot;
}

export const Jot = ({ jot }: Props) => {
  const { data: session } = useSession();

  return (
    <div
      className={`flex flex-col relative space-x-1 space-y-1 ${
        jot.username === session?.username ? "text-right" : "text-left"
      }`}
    >
      <div
        className={`flex relative space-x-1 ${
          jot.username === session?.username
            ? "flex-row-reverse space-x-reverse"
            : "flex-row"
        }`}
      >
        {jot?.avatar && (
          <div className="w-12 h-12 overflow-hidden flex-shrink-0 rounded">
            <a
              href={`https://github.com/${jot.username}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={50}
                height={50}
                src={jot.avatar}
                alt={jot.username}
                title={jot.username}
              />
            </a>
          </div>
        )}
        <span
          className={`inline-flex rounded space-x-2 items-start p-3 text-white ${
            jot.username === session?.username
              ? "bg-[#4a9c6d]"
              : "bg-[#363739]"
          } `}
        >
          {jot.username !== session?.username && (
            <span className="font-bold">{jot.username}:&nbsp;</span>
          )}
          <span className="max-w-sm">{jot.body}</span>
        </span>
      </div>
      <p className="text-xs text-white/50">
        {differenceInHours(new Date(), new Date(jot.createdAt)) >= 1
          ? formatRelative(new Date(jot.createdAt), new Date())
          : formatDistance(new Date(jot.createdAt), new Date(), {
              addSuffix: true,
            })}
      </p>
    </div>
  );
};
