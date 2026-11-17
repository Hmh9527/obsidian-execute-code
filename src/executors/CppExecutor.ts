import type { Outputter } from "src/output/Outputter";
import type { ExecutorSettings } from "src/settings/Settings";
import ClingExecutor from './ClingExecutor';

export default class CppExecutor extends ClingExecutor {

	constructor(settings: ExecutorSettings, file: string) {
		super(settings, file, "cpp");
	}
	
	override run(codeBlockContent: string, outputter: Outputter, cmd: string, cmdArgs: string, ext: string) {
		const std = this.settings.clingStd;
		const stdArg = std && std !== "none" ? `-std=${std}` : "";
		const args = [stdArg, this.settings.cppArgs].filter(a => a && a.trim()).join(" ");
		return super.run(codeBlockContent, outputter, cmd, args, "cpp");
	}
}
