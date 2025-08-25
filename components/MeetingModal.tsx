"use client";
import { ReactNode } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Image from "next/image";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: ReactNode;
  handleClick?: () => void;
  buttonText?: string;
  instantMeeting?: boolean;
  image?: string;
  buttonClassName?: string;
  buttonIcon?: string;
}

const MeetingModal = ({
  isOpen,
  onClose,
  title,
  className,
  children,
  handleClick,
  buttonText,
  instantMeeting,
  image,
  buttonClassName,
  buttonIcon,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex w-full max-w-[520px] flex-col gap-8 border-none bg-dark-1/95 backdrop-blur-xl px-8 py-10 text-white shadow-large rounded-2xl border border-white/10">
        <div className="flex flex-col gap-8">
          {image && (
            <div className="flex justify-center">
              <div className="p-4 bg-green-500/20 rounded-full border border-green-400/30">
                <Image src={image} alt="checked" width={64} height={64} className="animate-fade-in" />
              </div>
            </div>
          )}
          
          <div className="text-center">
            <h1 className={cn("text-3xl font-bold leading-tight text-white", className)}>
              {title}
            </h1>
          </div>
          
          {children && (
            <div className="space-y-6">
              {children}
            </div>
          )}
          
          <Button
            className={cn(
              "w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-medium focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-1",
              buttonClassName
            )}
            onClick={handleClick}
          >
            {buttonIcon && (
              <Image
                src={buttonIcon}
                alt="button icon"
                width={16}
                height={16}
                className="mr-2"
              />
            )}
            {buttonText || "Schedule Meeting"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
