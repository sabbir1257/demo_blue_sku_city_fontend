import React from "react";
import { useGetAllTeamMembersByPublicQuery } from "@/redux/api/teamApi/teamApi";
import Container from "@/components/ui/Container";
import Image from "next/image";


const BoardDirector = () => {
  const { data, isLoading } = useGetAllTeamMembersByPublicQuery(undefined);
  const BoardDirectorData =
    data?.teams?.filter((item: any) => item?.board_of_director == 1) || [];
  const executiveData =
    data?.teams?.filter((item: any) => item?.executive == 1) || [];
  const shareholderData =
    data?.teams?.filter((item: any) => item?.shareholder == 1) || [];

  
  if(isLoading){
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <>
      <TeamsCard id="boardOfDirector" title="Board of Directors" members={BoardDirectorData} />
      <TeamsCard id="executiveTeam" title="Executive Team" members={executiveData} />
      <TeamsCard id="shareHolders" title="Share Holders" members={shareholderData} />
    </>
  );
};

const TeamsCard = ({ id,title, members }: any) => {
  return (
    <Container>
      <div id={id} className="py-6 text-gray-900">
        {/* ✅ Conditional Title Section */}
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              {title}
            </h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full" />
          </div>
        )}

        {/* ✅ Reverse for Latest Image on Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {members?.length > 0 ? (
            members.map((member: any, index: any) => (
              <div
                key={index}
                className="group relative overflow-hidden h-80 md:h-[320px] rounded-xl"
              >
                <Image
                  src={member.image_url}
                  alt={member.name || "Gallery image"}
                  width={400}
                  height={320}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white text-lg font-bold">{member.name}</h3>
                  {member.designation && (
                    <p className="text-white">{member?.designation}</p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10 text-gray-500 text-lg font-semibold">
              No data found
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default BoardDirector;
