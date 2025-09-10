export const getHeaderData = (): string => {
  return 'Hello from Header';
};

export const HeaderUtils = {
  formatData: (data: any) => data,
  validate: (input: string) => input.length > 0
};