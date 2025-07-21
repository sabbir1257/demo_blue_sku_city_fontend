import { CheckCircle, Leaf, ShieldCheck, Users } from 'lucide-react';

export type TStepLinks = {
  icon: JSX.Element;
  title: string;
  des: string;
};

export const StepLinks: TStepLinks[] = [
  {
    icon: <ShieldCheck className="w-14 h-14 text-blue-600" />,
    title: 'Integrity & Transparency',
    des: 'We provide fully legal and verified land documents, with open communication throughout the process.',
  },
  {
    icon: <CheckCircle className="w-14 h-14 text-green-600" />,
    title: 'Quality',
    des: 'We never compromise on construction, infrastructure, or legal integrity—every plot and project meets high standards.',
  },
  {
    icon: <Leaf className="w-14 h-14 text-emerald-500" />,
    title: 'Sustainability',
    des: 'We plan communities with long-term environmental balance—green spaces, water bodies, and proper zoning.',
  },
  {
    icon: <Users className="w-14 h-14 text-indigo-500" />,
    title: 'Community Commitment',
    des: 'Our goal is to build societies, not just structures. Every development encourages social interaction, harmony, and security.',
  },
];
