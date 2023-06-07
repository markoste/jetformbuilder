<?php


namespace JFB_Modules\Wp_Cli;

use JFB_Components\Module\Base_Module_After_Install_It;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Repository\Repository_Pattern_Trait;
use JFB_Modules\Wp_Cli\Commands\Base_Command_It;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

final class Module implements Base_Module_It, Base_Module_After_Install_It {

	use Repository_Pattern_Trait;

	public function rep_item_id() {
		return 'cli';
	}

	public function condition(): bool {
		return Cli_Tools::is_cli();
	}

	public function on_install() {
		$this->rep_install();
	}

	public function rep_instances(): array {
		return array(
			new Commands\Migrate_Database(),
			new Commands\Downgrade_Database(),
			new Commands\Seed_Records(),
			new Commands\Seed_Jet_Apb(),
		);
	}

	public function init_hooks() {
	}

	public function remove_hooks() {
	}

	/**
	 * @param Base_Command_It $item
	 *
	 * @throws \Exception
	 */
	public function rep_after_install_item( $item ) {
		\WP_CLI::add_command(
			'jfb ' . $item->rep_item_id(),
			array( $item, 'do_command' )
		);
	}
}

