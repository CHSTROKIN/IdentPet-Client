/**
 * Converts a message text command to proper format
 * Example: "/mute @username" to "/mute @userId"
 * Supports "/ban", "/unban", "/mute", "/unmute"
 * @param messageText
 * @param mentionedUsers
 * @returns
 */
export declare function patchMessageTextCommand(messageText: string, mentionedUserIds: string[]): string;
//# sourceMappingURL=patchMessageTextCommand.d.ts.map