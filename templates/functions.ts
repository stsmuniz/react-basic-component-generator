export const getChangeMeData = (): string => {
  return 'Hello from ChangeMe';
};

export const ChangeMeUtils = {
  formatData: (data: any) => data,
  validate: (input: string) => input.length > 0
};